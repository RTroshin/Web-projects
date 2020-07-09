window.onload = function()
{
	var books = {};
	var article = 0;
	var modal = document.getElementById('modal-add-book');

	var buttonOpen = document.getElementById('modal-open');
	var buttonClose1 = document.getElementById('modal-close');
	var buttonClose2 = document.getElementsByClassName("close")[0];
	var buttonSave = document.getElementById('modal-save');

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

	function addBook()
	{	
		var data = buttonSave.getAttribute('data');
		//console.log(data);

		var book = [];
		for (var i = 0; i < 4; i++)
		{
			book[i] = [];
			for (var j = 0; j < 2; j++)
			{
				book[i][j] = 0;
			}
		}
		
		//console.log(book);
		
		book[0][0] = document.getElementById("book-cover").className;
		book[0][1] = document.getElementById("book-cover").value;
		book[1][0] = document.getElementById("book-name").className;
		book[1][1] = document.getElementById("book-name").value;
		book[2][0] = document.getElementById("book-author").className;
		book[2][1] = document.getElementById("book-author").value;
		book[3][0] = document.getElementById("book-year").className;
		book[3][1] = document.getElementById("book-year").value;

		//console.log(formData);

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

			//console.log(books);

			drawBook(article);
		}
		else
		{
			books[data] = book;
			//console.log('book = ', book);
			//console.log('books[data] = ', books[data]);
			drawBook(data);
		}
	}

	function drawBook(article)
	{
		var book = document.querySelectorAll('.book[data = "' + article + '"]');
		//console.log(book);
		if (book.length == 0)
		{
			var book = document.createElement('div');
			book.className = "book";
			book.setAttribute('data', article);

			var divHeader = document.createElement('div');
			divHeader.className = "book-header";
			divHeader.id = "book-header";

			var bookCover = document.createElement('img');
			bookCover.className = "book-cover";
			bookCover.src = books[article][0][1];

			var divContent = document.createElement('div');
			divContent.className = "book-content";
			divContent.id = "book-content";

			var bookName = document.createElement('h4');
			bookName.className = "book-name";
			bookName.innerHTML = books[article][1][1];

			var bookAuthor = document.createElement('h5');
			bookAuthor.className = "book-author";
			bookAuthor.innerHTML = books[article][2][1];

			var bookYear = document.createElement('h5');
			bookYear.className = "book-year";
			bookYear.innerHTML = books[article][3][1];

			var divFooter = document.createElement('div');
			divFooter.className = "book-footer";

			var buttonEdit = document.createElement('button');
			buttonEdit.className = "button-edit";
			buttonEdit.id = "button-edit";
			buttonEdit.innerHTML = 'Изменить';
			buttonEdit.setAttribute('data', article);
			buttonEdit.onclick = editBook;

			var buttonDelete = document.createElement('button');
			buttonDelete.className = "button-delete";
			buttonDelete.innerHTML = 'Удалить';
			buttonDelete.setAttribute('data', article);
			buttonDelete.onclick = deleteBook;

			divHeader.appendChild(bookCover);
			divContent.appendChild(bookName);
			divContent.appendChild(bookAuthor);
			divContent.appendChild(bookYear);
			divFooter.appendChild(buttonEdit);
			divFooter.appendChild(buttonDelete);

			book.appendChild(divHeader);
			book.appendChild(divContent);
			book.appendChild(divFooter);

			var bookPanel = document.querySelector('.book-panel');
			bookPanel.appendChild(book);
		}
		else
		{
			//var book = [];
			//book[article] = document.querySelector('[data = "' + article + '"]');

			//var newBook = document.createElement('div');
			//newBook.className = "book";

			//var divHeader = document.querySelector("book-header");
			//var divHeader = document.getElementById('book-header');
			//console.log('divHeader = ' ,divHeader);
			//var newDivHeader = document.createElement('div');
			//newDivHeader.className = "book-header";

			//bookCover = document.getElementsByClassName('book-cover[value]');	
			var bC = document.querySelector('.book[data = "' + article + '"]');
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

			//bookName = document.getElementsByClassName('book-name').value;
			var bN = document.querySelector('.book[data = "' + article + '"]');
			var bkNm = bN.querySelector('.book-content');
			bookName = bkNm.querySelector('.book-name');
			bookName = books[article][1][1];
			
			//var newBookName = document.createElement('h4');
			//newBookName.className = "book-name";
			//newBookName.innerHTML = books[article][1][1];


			//bookAuthor = document.getElementsByClassName('book-author').value;
			var bA = document.querySelector('.book[data = "' + article + '"]');
			var bkAr = bA.querySelector('.book-content');
			bookAuthor = bkAr.querySelector('.book-author');
			bookAuthor.innerHTML = books[article][2][1];
			
			//var newBookAuthor = document.createElement('h5');
			//newBookAuthor.className = "book-author";
			//newBookAuthor.innerHTML = books[article][2][1];


			//bookYear = document.getElementsByClassName('book-year').value;
			var bY = document.querySelector('.book[data = "' + article + '"]');
			var bkYr = bY.querySelector('.book-content');
			bookYear = bkYr.querySelector('.book-year');
			bookYear.innerHTML = books[article][3][1];
			
			//var newBookYear = document.createElement('h5');
			//newBookYear.className = "book-year";
			//newBookYear.innerHTML = books[article][3][1];


			//var divFooter = document.querySelector('.book-footer');

			//console.log('newBookCover = ', newBookCover);
			//console.log('bookCover = ', bookCover);
			//console.log('newBookName = ', newBookName);
			//console.log('bookName = ', bookName);

			//newDivHeader.appendChild(newBookCover);
			//newDivContent.appendChild(newBookName);
			//newDivContent.appendChild(newBookAuthor);
			//newDivContent.appendChild(newBookYear);

			//book[article].appendChild(newDivHeader);
			//book[article].appendChild(newDivContent);
	
			//var bookPanel = document.querySelector('.book-panel');
			//bookPanel.appendChild(newBook);
			
	//		divHeader.replaceChild(newBookCover, bookCover);
	//		divContent.replaceChild(newBookName, bookName);
	//		divContent.replaceChild(newBookAuthor, bookAuthor);
	//		divContent.replaceChild(newBookYear, bookYear);

			//divHeader.replaceChild(bookCover, newBookCover);
			//divContent.replaceChild(bookName, newBookName);
			//divContent.replaceChild(bookAuthor, newBookAuthor);
			//divContent.replaceChild(bookYear, newBookYear);

			//console.log('newBookName = ', newBookName);
			//console.log('bookName = ', bookName);

			//book[article].replaceChild(divHeader, newDivHeader);
			//book[article].replaceChild(divContent, newDivContent);
			//book[article].appendChild(divFooter);
			
			//bookPanel.replaceChild(book, newBook);

			buttonSave.removeAttribute('data');
		}
	}

	function editBook()
	{
		var data = this.getAttribute('data');
		//console.log(data);
		var valueCover = document.querySelector('.book-cover');
		var valueName = document.querySelector('.book-name');
		var valueAuthor = document.querySelector('.book-author');
		var valueYear = document.querySelector('.book-year');

		//console.log(valueName);	

		document.getElementById('book-cover').value = books[data][0][1];
		document.getElementById('book-name').value = books[data][1][1];
		document.getElementById('book-author').value = books[data][2][1];
		document.getElementById('book-year').value = books[data][3][1];

		//console.log(bookName);

		modal.style.display = "block";
		buttonSave.setAttribute('data', data);
	}

	function deleteBook()
	{
		var data = this.getAttribute('data');
		var bookPanel = document.querySelector('.book-panel');
		//console.log(bookPanel);
		var book = document.querySelector('[data = "' + data + '"]');
		//console.log('book =',book);
		//console.log('data =', data);
		//console.log('book[data] = ', book[data]);
		//console.log('book.length = ', book.length);
		bookPanel.removeChild(book);
		//console.log(books);	
		//console.log('books[data] = ', books[data]);	
		delete books[data];
		//console.log(books);
		//console.log('books[data] = ', books[data]);	
	}
}
