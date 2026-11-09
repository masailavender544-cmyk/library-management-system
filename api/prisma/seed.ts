import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  const fiction = await prisma.genre.create({
    data: { name: 'Fiction' },
  });

  const science = await prisma.genre.create({
    data: { name: 'Science' },
  });

  const history = await prisma.genre.create({
    data: { name: 'History' },
  });

  const technology = await prisma.genre.create({
    data: { name: 'Technology' },
  });

  await prisma.book.createMany({
    data: [
      {
        title: 'The Great Gatsby',
        author: 'F. Scott Fitzgerald',
        publishedAt: new Date('1925-04-10'),
        genreId: fiction.id,
      },
      {
        title: 'Pride and Prejudice',
        author: 'Jane Austen',
        publishedAt: new Date('1813-01-28'),
        genreId: fiction.id,
      },
      {
        title: 'To Kill a Mockingbird',
        author: 'Harper Lee',
        publishedAt: new Date('1960-07-11'),
        genreId: fiction.id,
      },
      {
        title: '1984',
        author: 'George Orwell',
        publishedAt: new Date('1949-06-08'),
        genreId: fiction.id,
      },

      {
        title: 'A Brief History of Time',
        author: 'Stephen Hawking',
        publishedAt: new Date('1988-01-01'),
        genreId: science.id,
      },
      {
        title: 'Cosmos',
        author: 'Carl Sagan',
        publishedAt: new Date('1980-01-01'),
        genreId: science.id,
      },
      {
        title: 'The Selfish Gene',
        author: 'Richard Dawkins',
        publishedAt: new Date('1976-01-01'),
        genreId: science.id,
      },
      {
        title: 'The Origin of Species',
        author: 'Charles Darwin',
        publishedAt: new Date('1859-11-24'),
        genreId: science.id,
      },

      {
        title: 'Sapiens',
        author: 'Yuval Noah Harari',
        publishedAt: new Date('2011-01-01'),
        genreId: history.id,
      },
      {
        title: 'Guns, Germs and Steel',
        author: 'Jared Diamond',
        publishedAt: new Date('1997-01-01'),
        genreId: history.id,
      },
      {
        title: 'The Silk Roads',
        author: 'Peter Frankopan',
        publishedAt: new Date('2015-01-01'),
        genreId: history.id,
      },

      {
        title: 'Clean Code',
        author: 'Robert C. Martin',
        publishedAt: new Date('2008-08-01'),
        genreId: technology.id,
      },
      {
        title: 'The Pragmatic Programmer',
        author: 'Andrew Hunt',
        publishedAt: new Date('1999-10-20'),
        genreId: technology.id,
      },
      {
        title: 'Design Patterns',
        author: 'Erich Gamma',
        publishedAt: new Date('1994-10-21'),
        genreId: technology.id,
      },
      {
        title: 'You Don’t Know JS',
        author: 'Kyle Simpson',
        publishedAt: new Date('2015-01-01'),
        genreId: technology.id,
      },
    ],
  });

  console.log('Database seeded successfully!');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
