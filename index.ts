import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
	// CREATE USER
	// const user = await prisma.user.create({
	//   data: {
	//     name: 'Elon Musk',
	//     email: 'e.musk@spaceX.com',
	//   },
	// });

	// GET ALL USERS AND THEIR ARTICLES
	// const users = await prisma.user.findMany({
	// 	include: {
	// 		articles: true,
	// 	},
	// });
	// console.log(users);

	// CREATE AN ARTICLE ASSOCIATED WITH A USER
	// const article = await prisma.article.create({
	//   data: {
	//     title: 'SpaceX is awesome',
	//     body: 'SpaceX is a space exploration company',
	//     author: {
	//       connect: {
	//         id: 1
	//       }
	//     }
	//   }
	// })
	// console.log(article);

	// GET ALL ARTICLES
	const articles = await prisma.article.findMany();
	console.log(articles);

	// CREATE USER AND ARTICLE AND CONNECT THEM
	// const user = await prisma.user.create({
	//   data: {
	//     name: 'Jeff Bezos',
	//     email: 'j.bezos@amazon.com',
	//     articles: {
	//       create: {
	//         title: 'Amazon is awesome, spaxeX is not',
	//         body: 'Amazon is an e-commerce company',
	//       },
	//     },
	//   },
	// });

	// CREATE ANOTHER ARTICLE AND CONNECT IT TO THE USER
	// const article = await prisma.article.create({
	// 	data: {
	// 		title: 'Blue Origin is awesome, spaxeX is not',
	//     body: 'Blue Origin is a space exploration company',
	//     author: {
	//       connect: {
	//         id: 2
	//       }
	//     }
	// 	},
	// });
	// console.log(article);

	// GET ALL ARTICLES WITH THEIR AUTHORS
	// const articles = await prisma.article.findMany({
	//   include: {
	//     author: true
	//   }
	// });
	// console.log(articles);

	// LOOP THROUGH ALL AUTHORS AND GET THEIR ARTICLES
	// users.forEach(async (user) => {
	// 	console.log(`User: ${user.name}, Email: ${user.email}`);
	// 	user.articles.forEach(async (article) => {
	// 		console.log(`\t- Title: ${article.title}`);
	// 		console.log(`\t${article.body}`);
	// 	});
	// 	console.log(`\n`);
  // });
  
  // UPDATE USER
  // const user = await prisma.user.update({
	// 	where: {
	// 		id: 2,
	// 	},
	// 	data: {
	// 		name: 'Jeffy Bazooka',
	// 		email: 'bazooka.jeff@fantasyisland.co.tk',
	// 	},
  // });
  // console.log(user);
  
  // REMOVE ARTICLE
  // const article = await prisma.article.delete({
  //   where: {
  //     id: 2
  //   }
  // });
  // console.log(article);
  
}

main()
  .then(async() => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.log(e);
    await prisma.$disconnect();
    process.exit(1);
  })