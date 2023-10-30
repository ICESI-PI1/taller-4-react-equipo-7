package com.icesi.bookmanager.controllers;

import com.icesi.bookmanager.repository.model.Book;
import com.icesi.bookmanager.services.IBookManagerService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/libros")

public class BookController {

    //Attributes
    private IBookManagerService service;

    public BookController(IBookManagerService service) {
        this.service = service;
    }
    @GetMapping
    public List<Book> listAllBooks() {
        return service.listAllBooks();
    }

    @GetMapping("/{id}")
    public Book getBookById(@PathVariable Long id) {
        return service.getBookById(id);
    }

    @PostMapping
    public Book createBook(@RequestBody Book book) {
        return service.createBook(book);
    }

    @PutMapping("/{id}")
    public Book updateBook(@PathVariable Long id, @RequestBody Book updatedBook) {
        return service.updateBook(id, updatedBook);
    }

    @DeleteMapping("/{id}")
    public Boolean deleteBook(@PathVariable Long id) {
        return service.deleteBook(id);
    }
}
