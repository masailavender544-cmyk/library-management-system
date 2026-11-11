## Schema Decisions

**Why does Book reference Genre using a foreign key?**

The application uses PostgreSQL, which is a relational database. In relational databases, relationships between entities are represented through foreign keys rather than embedding data directly.

The Book model contains a genreId field that references the Genre model. This design provides several benefits:

Reduces data duplication by storing each genre only once.
Maintains data consistency across all books within the same genre.
Makes updates easier because changing a genre name only requires updating one record.
Follows database normalization principles and relational database best practices.

For example, many books can belong to the Fiction genre while referencing the same Genre record rather than storing the word Fiction repeatedly in every book row.

Prisma vs Document Databases

One difference I noticed when modeling data in Prisma is that relationships are explicitly defined using foreign keys and relations. In a document database, related data is often embedded directly inside a document. Prisma encourages a structured relational approach that helps maintain consistency and reduce duplication.
## Schema Decisions

**Why Book references Genre instead of embedding it.**
Each Book stores a `genreId` foreign key that points to a row in the Genre
table, rather than copying the genre's data into every book record.

- **One source of truth.** A genre's name lives in one place. Renaming a genre
  is a single update, not an edit to every book.
- **No duplication or drift.** Embedding would repeat the genre on every book,
  and typos would create inconsistent variants ("Fantasy" vs "fantasy").
- **Genre is queried on its own.** The catalog needs to list genres, count the
  books in each, and filter by genre. That is easy when Genre is its own table.
- **Integrity is enforced.** The database rejects a book that points to a genre
  that does not exist.
- **One-to-many fits naturally.** Many books belong to one genre, which is a
  classic relational relationship.

**Roles.** `Role` is an enum (`PATRON`, `LIBRARIAN`) on `User`, so only valid
roles can be stored. New users default to `PATRON`.

**Reviews (stretch).** `Review` links a User to a Book with a rating and an
optional comment, so a book can have many reviews and a user can write many.

**Prisma vs. a document database.** Modeling in Prisma made me decide up front
how entities relate, because relations are declared in the schema and enforced
by the database. In a document database I could have nested the genre inside
each book and moved on. (Replace this paragraph with what felt different to you.)