Schema Decisions
Why does Book reference Genre using a foreign key?

The application uses PostgreSQL, which is a relational database. In relational databases, relationships between entities are represented through foreign keys rather than embedding data directly.

The Book model contains a genreId field that references the Genre model. This design provides several benefits:

Reduces data duplication by storing each genre only once.
Maintains data consistency across all books within the same genre.
Makes updates easier because changing a genre name only requires updating one record.
Follows database normalization principles and relational database best practices.

For example, many books can belong to the Fiction genre while referencing the same Genre record rather than storing the word Fiction repeatedly in every book row.

Prisma vs Document Databases

One difference I noticed when modeling data in Prisma is that relationships are explicitly defined using foreign keys and relations. In a document database, related data is often embedded directly inside a document. Prisma encourages a structured relational approach that helps maintain consistency and reduce duplication.
