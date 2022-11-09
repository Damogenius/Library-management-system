





 var tableData =[
    {
      "author": "Chinua Achebe",
      "country": "Nigeria",
      "language": "English",
      "title": "Things Fall Apart",
      "year": 1958
    },
    {
      "author": "Hans Christian Andersen",
      "country": "Denmark",
      "language": "Danish",
      "title": "Fairy tales",
      "year": 1836
    },
    {
      "author": "Dante Alighieri",
      "country": "Italy",
      
      "language": "Italian",
      
      
      "title": "The Divine Comedy",
      "year": 1315
    },
    
  
    {
      "author": "Jane Austen",
      "country": "United Kingdom",
      
      "language": "English",
      
      
      "title": "Pride and Prejudice",
      "year": 1813
    },
    {
      "author": "Honor\u00e9 de Balzac",
      "country": "France",
      
      "language": "French",
      
      
      "title": "Le P\u00e8re Goriot",
      "year": 1835
    },
    {
      "author": "Samuel Beckett",
      "country": "Republic of Ireland",
      
      "language": "French, English",
      
      
      "title": "Molloy, Malone Dies, The Unnamable, the trilogy",
      "year": 1952
    },
    {
      "author": "Giovanni Boccaccio",
      "country": "Italy",
      
      "language": "Italian",
      
      
      "title": "The Decameron",
      "year": 1351
    },
    {
      "author": "Jorge Luis Borges",
      "country": "Argentina",
      
      "language": "Spanish",
      
      
      "title": "Ficciones",
      "year": 1965
    },
    {
      "author": "Emily Bront\u00eb",
      "country": "United Kingdom",
      
      "language": "English",
      
      
      "title": "Wuthering Heights",
      "year": 1847
    },
    {
      "author": "Albert Camus",
      "country": "Algeria, French Empire",
      
      "language": "French",
      
      
      "title": "The Stranger",
      "year": 1942
    },
    {
      "author": "Paul Celan",
      "country": "Romania, France",
      
      "language": "German",
      
      
      "title": "Poems",
      "year": 1952
    },
    {
      "author": "Louis-Ferdinand C\u00e9line",
      "country": "France",
      
      "language": "French",
      
      
      "title": "Journey to the End of the Night",
      "year": 1932
    },
    {
      "author": "Miguel de Cervantes",
      "country": "Spain",
      
      "language": "Spanish",
      
      
      "title": "Don Quijote De La Mancha",
      "year": 1610
    },
    {
      "author": "Geoffrey Chaucer",
      "country": "England",
      
      "language": "English",
      
      
      "title": "The Canterbury Tales",
      "year": 1450
    },
    {
      "author": "Anton Chekhov",
      "country": "Russia",
      
      "language": "Russian",
      
      
      "title": "Stories",
      "year": 1886
    },
    {
      "author": "Joseph Conrad",
      "country": "United Kingdom",
      
      "language": "English",
      
      
      "title": "Nostromo",
      "year": 1904
    },
    {
      "author": "Charles Dickens",
      "country": "United Kingdom",
      
      "language": "English",
      
      
      "title": "Great Expectations",
      "year": 1861
    },
    {
      "author": "Denis Diderot",
      "country": "France",
      
      "language": "French",
      
      
      "title": "Jacques the Fatalist",
      "year": 1796
    },
    {
      "author": "Alfred D\u00f6blin",
      "country": "Germany",
      
      "language": "German",
      
      
      "title": "Berlin Alexanderplatz",
      "year": 1929
    },
    {
      "author": "Fyodor Dostoevsky",
      "country": "Russia",
      
      "language": "Russian",
      
      
      "title": "Crime and Punishment",
      "year": 1866
    },
    {
      "author": "Fyodor Dostoevsky",
      "country": "Russia",
      
      "language": "Russian",
      
      
      "title": "The Idiot",
      "year": 1869
    },
    {
      "author": "Fyodor Dostoevsky",
      "country": "Russia",
      
      "language": "Russian",
      
      
      "title": "The Possessed",
      "year": 1872
    },
    {
      "author": "Fyodor Dostoevsky",
      "country": "Russia",
      
      "language": "Russian",
      
      
      "title": "The Brothers Karamazov",
      "year": 1880
    }
  
  ]

//   $('#search').on('keyup',function()
//   {
//     var value=$(this).val()
//     console.log("value:",value)
//     var data=searchTable(value,tableData)
//     console.log(tableData)

//   })

//     buildTable(tableData)
//   console.log(tableData)
//   function searchTable(value,data)
//   {
//     var filteredData=[]
//     for( var i=0;i<data.length;i++)
//     {
//       value=value.toLowerCase()
//       var name=data[i].author.toLowerCase()
//       var title=data[i].title.toLowerCase()
//       console.log(data)

//       if(name.includes(value) || title.includes(value))
//       {
//       filteredData.push(data[i])
//     }
//   }
// }
var state = {
  'querySet': tableData,

  'page': 1,
  'rows': 10,
  'window': 5,
}

buildTable()

function pagination(querySet, page, rows) {

  var trimStart = (page - 1) * rows
  var trimEnd = trimStart + rows

  var trimmedData = querySet.slice(trimStart, trimEnd)

  var pages = Math.round(querySet.length / rows);

  return {
      'querySet': trimmedData,
      'pages': pages,
  }
}

function pageButtons(pages) {
  var wrapper = document.getElementById('pagination-wrapper')

  wrapper.innerHTML = ``
console.log('Pages:', pages)

  var maxLeft = (state.page - Math.floor(state.window / 2))
  var maxRight = (state.page + Math.floor(state.window / 2))

  if (maxLeft < 1) {
      maxLeft = 1
      maxRight = state.window
  }

  if (maxRight > pages) {
      maxLeft = pages - (state.window - 1)
      
      if (maxLeft < 1){
        maxLeft = 1
      }
      maxRight = pages
  }
  
  

  for (var page = maxLeft; page <= maxRight; page++) {
    wrapper.innerHTML += `<button value=${page} class="page btn btn-sm btn-info">${page}</button>`
  }

  if (state.page != 1) {
      wrapper.innerHTML = `<button value=${1} class="page btn btn-sm btn-info">&#171; First</button>` + wrapper.innerHTML
  }

  if (state.page != pages) {
      wrapper.innerHTML += `<button value=${pages} class="page btn btn-sm btn-info">Last &#187;</button>`
  }

  $('.page').on('click', function() {
      $('#table-body').empty()

      state.page = Number($(this).val())

      buildTable()
  })

}


function buildTable() {
  var table = $('#table-body')

  var data = pagination(state.querySet, state.page, state.rows)
  var myList = data.querySet

  for (var i = 1 in myList) {
      //Keep in mind we are using "Template Litterals to create rows"
      var row = `<tr>
                <td>${myList[i].title}</td>
                <td>${myList[i].author}</td>
                <td>${myList[i].year}</td>
                <td>${myList[i].language}</td>
                `
      table.append(row)
  }

  pageButtons(data.pages)
}
console.log(tableData)

