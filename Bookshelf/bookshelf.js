window.onload = function()
{
	var books = {};
	var article = 0;
	var modal = document.getElementById('modal-add-book');			// Модальное окно

	//	books = JSON.parse(localStorage.getItem('library'));

	var saveBooks = localStorage.getItem('library');
    if (saveBooks)
	{
        books = JSON.parse(saveBooks);
		//console.log('books = ', books);
		for (var key in books)
		{
			drawBook(key);
			article = key;
		}
	}

	// Кнопки для взаимодействия с модальным окном

	var buttonOpen = document.getElementById('modal-open'); 		// Кнопка "Добавить книгу"
	var buttonSave = document.getElementById('modal-save');			// Кнопка "Сохранить"
	var buttonClose1 = document.getElementById('modal-close'); 		// Кнопка "Отмена"
	var buttonClose2 = document.querySelector(".close");			// Кнопка "Крестик"

	buttonOpen.onclick = function()
	{
		modal.style.display = "block";
	}

	buttonClose1.onclick = function()
	{
		modal.style.display = "none";
	}

	buttonClose2.onclick = function()
	{
		modal.style.display = "none";
	}

	buttonSave.onclick = function()
	{
		//console.log('article = ', article);
		addBook();
		modal.style.display = "none";
	}

	/*
	window.onclick = function(event)
	{
		if (event.target == modal)
			modal.style.display = "none";
	}
	*/

	// Функции для добавления, изменения и удаления книг

	function addBook()
	{
		var data = buttonSave.getAttribute('data-edit');
		//console.log('data = ', data);

		var book = [];
		for (var i = 0; i < 4; i++)
		{
			book[i] = [];
			for (var j = 0; j < 2; j++)
			{
				book[i][j] = 0;
			}
		}
		
		//console.log('book = ', book);
		
		book[0][0] = document.getElementById("book-cover").className;
		book[0][1] = document.getElementById("book-cover").value;
		book[1][0] = document.getElementById("book-name").className;
		book[1][1] = document.getElementById("book-name").value;
		book[2][0] = document.getElementById("book-author").className;
		book[2][1] = document.getElementById("book-author").value;
		book[3][0] = document.getElementById("book-year").className;
		book[3][1] = document.getElementById("book-year").value;

		/*
		for (var i = 0; i < 4; i++)
		{
			books[i] = [];
			for (var j = 0; j < 1; j++)
			{
				books[i] = book[i][j];
			}
		}
		*/

		if (data == undefined)
		{
			article++;	
			books[article] = book;
			console.log('book = ', book);
			//console.log('books = ', books);

			drawBook(article);
		}
		else
		{
			books[data] = book;
			console.log('book = ', book);
			//console.log('books[data] = ', books[data]);
			drawBook(data);
		}
		localStorage.setItem('library', JSON.stringify(books));
	}

	function drawBook(article)
	{
		var bookArticle = document.querySelectorAll('.book[data-article = "' + article + '"]');
		console.log('book = ', bookArticle);
		console.log('bookArticle.length = ', bookArticle.length);
		if (bookArticle.length == 0)
		{
			var book = document.createElement('div');
			book.className = "book";
			book.setAttribute('data-article', article);

			var divHeader = document.createElement('div');
			divHeader.className = "book-header";
			divHeader.id = "book-header";
			
			var bookCover = document.createElement('img');
			bookCover.className = "book-cover";
			bookCover.src = books[article][0][1];

			var divContent = document.createElement('div');
			divContent.className = "book-content";
			divContent.id = "book-content";

			var bookName = document.createElement('h3');
			bookName.className = "book-name";
			bookName.innerHTML = books[article][1][1];

			var bookAuthor = document.createElement('h4');
			bookAuthor.className = "book-author";
			bookAuthor.innerHTML = books[article][2][1];

			var bookYear = document.createElement('h4');
			bookYear.className = "book-year";
			bookYear.innerHTML = books[article][3][1] + ' г.';

			var divFooter = document.createElement('div');
			divFooter.className = "book-footer";

			var buttonEdit = document.createElement('button');
			buttonEdit.className = "button-edit";
			buttonEdit.id = "button-edit";
			buttonEdit.innerHTML = 'Изменить';
			buttonEdit.setAttribute('data-article', article);
			buttonEdit.onclick = editBook;

			var buttonDelete = document.createElement('button');
			buttonDelete.className = "button-delete";
			buttonDelete.innerHTML = 'Удалить';
			buttonDelete.setAttribute('data-article', article);
			buttonDelete.onclick = deleteBook;

			divHeader.appendChild(bookCover);
			divContent.appendChild(bookName);
			divContent.appendChild(bookAuthor);
			divContent.appendChild(bookYear);
			divFooter.appendChild(buttonEdit);
			divFooter.appendChild(buttonDelete);			

			var hr = document.createElement('hr');

			book.appendChild(divHeader);
			book.appendChild(divContent);
			book.appendChild(divFooter);
			book.appendChild(hr);

			var bookPanel = document.querySelector('.book-panel');
			bookPanel.appendChild(book);
		}
		else
		{
			//var book = [];
			//book[article] = document.querySelector('[data-article = "' + article + '"]');

			//var newBook = document.createElement('div');
			//newBook.className = "book";

			//var divHeader = document.querySelector("book-header");
			//var divHeader = document.getElementById('book-header');
			//console.log('divHeader = ' ,divHeader);
			//var newDivHeader = document.createElement('div');
			//newDivHeader.className = "book-header";

			var bC = document.querySelector('.book[data-article = "' + article + '"]');
			console.log(bC);
			var bkCr = bC.querySelector('.book-header');
			bookCover = bkCr.querySelector('.book-cover');	
			bookCover.src = books[article][0][1];
			
			//var newBookCover = document.createElement('img');
			//newBookCover.className = "book-cover";
			//newBookCover.src = books[article][0][1];


			//var divContent = document.getElementsByClassName('book-content')[article];
			//var divContent = document.getElementById('book-content');
			
			//var newDivContent = document.createElement('div');
			//newDivContent.className = "book-content";

			var bN = document.querySelector('.book[data-article = "' + article + '"]');
			console.log(bN);
			var bkNm = bN.querySelector('.book-content');
			bookName = bkNm.querySelector('.book-name');
			bookName.innerHTML = books[article][1][1];
			
			//var newBookName = document.createElement('h4');
			//newBookName.className = "book-name";
			//newBookName.innerHTML = books[article][1][1];

			var bA = document.querySelector('.book[data-article = "' + article + '"]');
			console.log(bA);
			var bkAr = bA.querySelector('.book-content');
			bookAuthor = bkAr.querySelector('.book-author');
			bookAuthor.innerHTML = books[article][2][1];
			
			//var newBookAuthor = document.createElement('h5');
			//newBookAuthor.className = "book-author";
			//newBookAuthor.innerHTML = books[article][2][1];

			var bY = document.querySelector('.book[data-article = "' + article + '"]');
			console.log(bY);
			var bkYr = bY.querySelector('.book-content');
			bookYear = bkYr.querySelector('.book-year');
			bookYear.innerHTML = books[article][3][1] + ' г.';
			
			//var newBookYear = document.createElement('h5');
			//newBookYear.className = "book-year";
			//newBookYear.innerHTML = books[article][3][1];

			//var divFooter = document.querySelector('.book-footer');

			//console.log('bookCover = ', bookCover);
			//console.log('bookName = ', bookName);

			//newDivHeader.appendChild(newBookCover);
			//newDivContent.appendChild(newBookName);
			//newDivContent.appendChild(newBookAuthor);
			//newDivContent.appendChild(newBookYear);

			//book[article].appendChild(newDivHeader);
			//book[article].appendChild(newDivContent);
	
			//var bookPanel = document.querySelector('.book-panel');
			//bookPanel.appendChild(newBook);

			//divHeader.replaceChild(bookCover, newBookCover);
			//divContent.replaceChild(bookName, newBookName);
			//divContent.replaceChild(bookAuthor, newBookAuthor);
			//divContent.replaceChild(bookYear, newBookYear);

			//book[article].replaceChild(divHeader, newDivHeader);
			//book[article].replaceChild(divContent, newDivContent);
			//book[article].appendChild(divFooter);
			
			//bookPanel.replaceChild(book, newBook);

			buttonSave.removeAttribute('data-edit');
		}
	}

	function editBook()
	{
		var data = this.getAttribute('data-article');
		//console.log('data = ', data);

		//console.log('books[data][1][1] = ', books[data][1][1]);

		document.getElementById('book-cover').value = books[data][0][1];
		document.getElementById('book-name').value = books[data][1][1];
		document.getElementById('book-author').value = books[data][2][1];
		document.getElementById('book-year').value = books[data][3][1];

		//console.log('books[data][1][1] = ', books[data][1][1]);
		
		modal.style.display = "block";
		buttonSave.setAttribute('data-edit', data);
	}

	function deleteBook()
	{
		var data = this.getAttribute('data-article');
		var bookPanel = document.querySelector('.book-panel');
		//console.log('bookPanel = ', bookPanel);
		var book = document.querySelector('[data-article = "' + data + '"]');
		//console.log('book = ',book);
		//console.log('data = ', data);
		//console.log('book[data] = ', book[data]);
		bookPanel.removeChild(book);
		//console.log('books[data] = ', books[data]);
		delete books[data];
		//console.log('books[data] = ', books[data]);

		//console.log(Object.keys(books).length);

		var count = 0;
		for (var key in books)
		{
			count++;
		}

		//if (Object.keys(books).length == 0)
		if (count == 0)
		{
			localStorage.removeItem('library');						// Удаление ключа
		}
		else
		{
			localStorage.setItem('library', JSON.stringify(books));	// Обновление значений в ключе
		}
	}
}