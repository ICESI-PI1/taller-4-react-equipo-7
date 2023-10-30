package com.icesi.bookmanager.repository.model;

import java.util.Date;

public class Book {
    private Long id;
    private String title;
    private Date publicationDate;
    private Author author;

    public Book(Long id, String title, Date publicationDate) {
        this.id = id;
        this.title = title;
        this.publicationDate = publicationDate;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public Date getPublicationDate() {
        return publicationDate;
    }

    public void setPublicationDate(Date publicationDate) {
        this.publicationDate = publicationDate;
    }
    public Author getAuthor() {
        return author;
    }

    public void setAuthor(Author author) {
        this.author = author;
    }
}
