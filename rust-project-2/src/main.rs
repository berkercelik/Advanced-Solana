struct Book {
    title: String,
    author: String,
    page_count: u32,
}

struct Magazine {
    title: String,
    issue: u32,
    topic: String,
}

enum Publication {
    Book(Book),
    Magazine(Magazine),
}

fn create_publications() -> Vec<Publication> {
    let book1: Publication = Publication::Book(Book {
        title: String::from("Rust Programming"),
        author: String::from("John Doe"),
        page_count: 300,
    });

    let magazine1: Publication = Publication::Magazine(Magazine {
        title: String::from("Web3 Tech Magazine"),
        issue: 42,
        topic: String::from("Web3 Futu"),
    });
    

    vec![book1, magazine1]
}

fn display_publications(publications: Vec<Publication>) {
    for publ in publications {
        match publ {
            Publication::Book(book) => {
                println!("Book: {} Author: {}, {} Page_count", book.title, book.author, book.page_count);
            }
            Publication::Magazine(magazine) => {
                println!("Magazine: {} - Issue: {}, Topic: {}", magazine.title, magazine.issue, magazine.topic);
            }
        }
    }
}

fn main() {
    let publications = create_publications();

    display_publications(publications);
}