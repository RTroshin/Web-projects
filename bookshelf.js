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

var books = [];
var article = 0;

function addBook()
{	
	article++;
	books.push(article);

	var book = [];
	book[0] = document.getElementById("book-cover").value;
	book[1] = document.getElementById("book-name").value;
	book[2] = document.getElementById("book-author").value;
	book[3] = document.getElementById("book-year").value;

	books[article] = book;
	drawBook(article);
}

function drawBook()
{
	var bookArticle = document.createElement('input');
	bookArticle.className = "book-article";
	bookArticle.value = article;
	bookArticle.innerHTML = document.getElementsByClassName('book-article').value;

	var divHeader = document.createElement('div');
	divHeader.className = "book-header";

	var bookCover = document.createElement('img');
	bookCover.className = "book-cover";
	bookCover.src = books[article][0];

	var divContent = document.createElement('div');
	divContent.className = "book-content";

	var bookName = document.createElement('h4');
	bookName.className = "book-name";
	bookName.innerHTML = books[article][1];

	var bookAuthor = document.createElement('h5');
	bookAuthor.className = "book-author";
	bookAuthor.innerHTML = books[article][2];

	var bookYear = document.createElement('h5');
	bookYear.className = "book-year";
	bookYear.innerHTML = books[article][3];

	var divFooter = document.createElement('div');
	divFooter.className = "book-footer";

	var buttonEdit = document.createElement('button');
	buttonEdit.className = "button-edit";
	buttonEdit.innerHTML = 'Изменить';
	buttonEdit.onclick = editBook;

	var buttonDelete = document.createElement('button');
	buttonDelete.className = "button-delete";
	buttonDelete.innerHTML = 'Удалить';
	//buttonDelete.onclick = deleteBook;

	divHeader.appendChild(bookCover);
	divContent.appendChild(bookName);

	divContent.appendChild(bookArticle);

	divContent.appendChild(bookAuthor);
	divContent.appendChild(bookYear);
	divFooter.appendChild(buttonEdit);
	divFooter.appendChild(buttonDelete);

	var book = document.createElement('div');
	book.className = "book";

	book.appendChild(divHeader);
	book.appendChild(divContent);
	book.appendChild(divFooter);

	var bookPanel = document.querySelector('.book-panel');
	bookPanel.appendChild(book);

	buttonDelete.onclick = deleteBook;
}

function editBook()
{
	modal.style.display = "block";

	bookCover.src = document.getElementById("book-cover").value;
	bookName.innerHTML = document.getElementById("book-name").value;
	bookAuthor.innerHTML = document.getElementById("book-author").value;
	bookYear.innerHTML = document.getElementById("book-year").value;

	divHeader.replaceChild(bookCover);
	divContent.replaceChild(bookName);
	divContent.replaceChild(bookAuthor);
	divContent.replaceChild(bookYear);

	book.replaceChild(divHeader);
	book.replaceChild(divContent);

	var bookPanel = document.querySelector('.book-panel');
	bookPanel.replaceChild(book);
}

function deleteBook()
{
	article = document.getElementsByClassName('book-article').value;
	books.splice(article, 1);

	//delete books(article);
	divHeader.removeChild(bookCover);
	divContent.removeChild(bookName);

	divContent.removeChild(bookArticle);

	divContent.removeChild(bookAuthor);
	divContent.removeChild(bookYear);
	divFooter.removeChild(buttonEdit);
	divFooter.removeChild(buttonDelete);

	book.removeChild(divHeader);
	book.removeChild(divContent);
	book.removeChild(divFooter);

	var bookPanel = document.querySelector('.book-panel');
	bookPanel.removeChild(book);
}