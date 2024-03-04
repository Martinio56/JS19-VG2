const data = [
    {

        "id": 1,
        
        "title": "Bok 1",
        
        "body": "quia et suscipitsuscipit recusandae consequuntur expedita et cum reprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",
        
        "readCount": 10
        
        },
        
        {
        
        "id": 2,
        
        "title": "Bok 2",
        
        "body": "est rerum tempore vitaesequi sint nihil reprehenderit dolor beatae ea dolores nequefugiat blanditiis voluptate porro vel nihil molestiae ut reiciendisqui aperiam non debitis possimus qui neque nisi nulla",
        
        "readCount": 300
        
        },
        
        {
        
        "id": 3,
        
        "title": "Bok 3",
        
        "body": "et iusto sed quo iurevoluptatem occaecati omnis eligendi aut advoluptatem doloribus vel accusantium quis pariaturmolestiae porro eius odio et labore et velit aut",
        
        "readCount": 80
        
        },
        
        {
        
        "id": 4,
        
        "title": "Bok 4",
        
        "body": "ullam et saepe reiciendis voluptatem adipiscisit amet autem assumenda provident rerum culpaquis hic commodi nesciunt rem tenetur doloremque ipsam iure\nquis sunt voluptatem rerum illo velit",
        
        "readCount": 200
        
        },
        
        {
        
        "id": 5,
        
        "title": "Bok 5",
        
        "body": "repudiandae veniam quaerat sunt sedalias aut fugiat sit autem sed estvoluptatem omnis possimus esse voluptatibus quisest aut tenetur dolor neque",
        
        "readCount": 109
        
        }
];

  const bookContainer = document.getElementById('bookContainer');
  const filterInput = document.getElementById('filter');

  // Function to render books based on filter
  function renderBooks(filter) {
    bookContainer.innerHTML = ''; // Clear previous content

    data.filter(book => {
      return book.title.toLowerCase().includes(filter.toLowerCase());
    }).forEach(book => {
      const bookDiv = document.createElement('div');
      bookDiv.classList.add('book');
      bookDiv.innerHTML = `
        <h3>${book.title}</h3>
        <p>${book.body}</p>
        <p>Read Count: ${book.readCount}</p>
        <button onclick="editBook(${book.id})">Edit</button>
        <button onclick="deleteBook(${book.id})">Delete</button>
      `;
      bookContainer.appendChild(bookDiv);
    });
  }

  // Function to handle filter input
  filterInput.addEventListener('input', function () {
    renderBooks(this.value);
  });

  // Initial render
  renderBooks('');

  // Function to edit book (you can implement your own logic here)
  function editBook(bookId) {
    // Implement your logic to edit the book
    console.log('Editing book with ID:', bookId);
  }

  // Function to delete book (you can implement your own logic here)
  function deleteBook(bookId) {
    // Implement your logic to delete the book
    console.log('Deleting book with ID:', bookId);
}