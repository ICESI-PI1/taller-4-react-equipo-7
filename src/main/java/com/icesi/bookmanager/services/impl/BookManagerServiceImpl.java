package com.icesi.bookmanager.services.impl;

import com.icesi.bookmanager.repository.model.Author;
import com.icesi.bookmanager.repository.model.Book;
import com.icesi.bookmanager.repository.persistence.IBookManagerRepository;
import com.icesi.bookmanager.services.IBookManagerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class BookManagerServiceImpl implements IBookManagerService {
    @Autowired
    private IBookManagerRepository repository;

    public BookManagerServiceImpl(IBookManagerRepository repository) {
        this.repository = repository;
    }

    @Override
    public List<Book> listAllBooks() {
        return repository.listAllBooks();
    }

    @Override
    public List<Author> listAllAuthors() {
        return repository.listAllAuthors();
    }

    @Override
    public Book getBookById(Long id) {
        return repository.getBookById(id);
    }
    @Override
    public Book createBook(Book book) {
        return repository.createBook(book);
    }
    @Override
    public Book updateBook(Long id, Book updatedBook) {
        return repository.updateBook(id, updatedBook);
    }

    @Override
    public Author getAuthorById(Long id) {
        return repository.getAuthorById(id);
    }
    @Override
    public Author createAuthor(Author author) {
        return repository.createAuthor(author);
    }

    @Override
    public Author updateAuthor(Long id, Author updatedAuthor) {
        return repository.updateAuthor(id, updatedAuthor);
    }

    @Override
    public Boolean deleteBook(Long id) {
        return repository.deleteBook(id);
    }

    @Override
    public Boolean deleteAuthor(Long id) {
        return repository.deleteAuthor(id);
    }
    @Override
    public List<Book> getBooksByAuthor(Long id) {
        return repository.getBooksByAuthor(id);
    }
}
