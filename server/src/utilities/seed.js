import models from '../models';

const createUsersWithBooks = async () => {
	const users = [
		new models.User({
			username: 'ivan',
			email: 'asd@asd.bg',
			password: 'asd123'
		}),
		new models.User({
			username: 'peter',
			email: 'asd@bg.bg',
			password: 'asd123'
		}),
		new models.User({
			username: 'admin',
			email: 'admin@admin.admin',
			password: 'admin'
		})
	];

	const genres = [
		new models.Genre({
			label: 'Drama'
		}),
		new models.Genre({
			label: 'Fantasy'
		}),
		new models.Genre({
			label: 'Action'
		}),
		new models.Genre({
			label: 'Fiction'
		}),
		new models.Genre({
			label: 'Science Fiction'
		}),
		new models.Genre({
			label: 'Young Adult'
		}),
		new models.Genre({
			label: 'Adventure'
		}),
		new models.Genre({
			label: 'Dystopian'
		})
	];

	const authors = [
		new models.Author({
			name: 'Tom Clancy',
			image: 'http://www.gstatic.com/tv/thumb/persons/542633/542633_v9_ba.jpg',
			description:
				'Thomas Leo Clancy Jr. was an American novelist best known for his technically detailed espionage and military-science storylines set during and after the Cold War. Seventeen of his novels were bestsellers, and more than 100 million copies of his books are in print.[1] His name was also used on movie scripts written by ghostwriters, nonfiction books on military subjects, and video games. He was a part-owner of the Baltimore Orioles and vice-chairman of their community activities and public affairs committees.',
			born: '1947-04-12'
		}),
		new models.Author({
			name: 'Gary Paulsen',
			image: 'https://www.btsb.com/btsbcontent/uploads/2013/03/gary-paulsen.jpg',
			description:
				'Gary James Paulsen is an American writer of young adult literature, best known for coming of age stories about the wilderness. He is the author of more than 200 books and has written more than 200 magazine articles and short stories, and several plays, all primarily for teenagers. He won the Margaret Edwards Award from the American Library Association in 1997 for his lifetime contribution in writing for teens.',
			born: '1939-05-17'
		}),
		new models.Author({
			name: 'Louis Sachar',
			image: 'http://www.gstatic.com/tv/thumb/persons/295481/295481_v9_ba.jpg',
			description: 'Louis Sachar is an American young-adult mystery-comedy author. He is best known for the Wayside School series and the award-winner, Holes. Holes won the 1998 U.S. National Book Award for Young Peoples Literature and the 1999 Newbery Medal for the years most distinguished contribution to American literature for children".[3] In 2013, it was ranked sixth among all childrens novels in a survey published by School Library Journal.',
			born: '1954-03-20'
		}),
		new models.Author({
			name: 'Mary Shelley',
			image: 'https://www.onthisday.com/images/people/mary-shelley-medium.jpg',
			description: 'Mary Shelley was a British novelist, short story writer, dramatist, essayist, biographer, and travel writer, best known for her Gothic novel Frankenstein: or, The Modern Prometheus (1818). She also edited and promoted the works of her husband, the Romantic poet and philosopher Percy Bysshe Shelley. Her father was the political philosopher William Godwin, and her mother was the philosopher and feminist Mary Wollstonecraft.',
			born: '1797-08-30'
		}),
		new models.Author({
			name: 'Rick Yancey',
			image: 'https://pbs.twimg.com/profile_images/783838080381820928/t4wxAzVz_400x400.jpg',
			description: 'Richard Yancey is an American author who writes works of suspense, fantasy, and science fiction aimed at young adults.',
			born: '1962-11-04'
		}),
		new models.Author({
			name: 'Suzanne Collins',
			image: 'http://www.gstatic.com/tv/thumb/persons/644223/644223_v9_ba.jpg',
			description: 'American author of young adult literature, whose works include The Hunger Games trilogy and The Underland Chronicles series. The daughter of an Air Force officer, she lives in her native home of Connecticut.',
			born: '1962-08-10'
		})
	];

	const books = [
		new models.Book({
			title: 'Red rabbit',
			cover: 'https://covers.openlibrary.org/w/id/6917429-M.jpg',
			about: `Jack Ryans first days with the CIA may be the Popes last days alive.Long before he was President or head of the CIA, before he fought terrorist attacks on the Super Bowl or the White House, even before a submarine named Red October made its perilous way across the Atlantic, Jack Ryan was an historian, teacher, and recent ex-Marine temporarily living in England while researching a book. A series of deadly encounters with an IRA splinter group had brought him to the attention of the CIA's Deputy Director, Vice Admiral James Greer—as well as his counterpart with the British SIS, Sir Basil Charleston—and when Greer asked him if he wanted to come aboard as a freelance analyst, Jack was quick to accept. The opportunity was irresistible, and he was sure he could fit it in with the rest of his work.
					And then Jack forgot all about the rest of his work, because one of his first assignments was to help debrief a high-level Soviet defector, and the defector told an amazing tale: Top Soviet officials, including Yuri Andropov, were planning to assassinate the Pope, John Paul II. Could it be true? As the days and weeks go by, Ryan must battle, first to try to confirm the plot, and then to prevent it, but this is a brave new world, and nothing he has done up to now has prepared him for the lethal game of cat-and-mouse that is the Soviet Union versus the United States. In the end, it will be not just the Pope's life but the stability of the Western world that is at stake. . . and it may already be too late for a novice CIA analyst to do anything about it.
					"Clancy creates not only compelling characters but frighteningly topical situations and heart-stopping action," wrote The Washington Post about The Bear and the Dragon. "Among the handful of superstars, Clancy still reigns, and he is not likely to be dethroned any time soon." These words were never truer than about the remarkable pages of his breathtaking new novel. This is Clancy at his best—and there is none better.`,
			authors: [authors[0].id],
			readers: [users[0].id],
			genres: [genres[0].id]
		}),
		new models.Book({
			title: 'Hatchet',
			cover: 'https://covers.openlibrary.org/w/id/8231801-L.jpg',
			about: 'The only survivor of a plane crash, Brian spends 54 days in the wilderness, learning to cope with only a hatchet given him by his mother and also learning to survive his parents divorce.',
			authors: [authors[1].id],
			readers: [users[1].id],
			genres: [genres[1].id]
		}),
		new models.Book({
			title: 'Holes',
			cover: 'https://covers.openlibrary.org/w/id/8231835-M.jpg',
			about: 'Stanley Yelnats is under a curse. A curse that began with his no-good-dirty-rotten-pig-stealing great-great-grandfather and has since followed generations of Yelnatses. Now Stanley has been unjustly sent to a boys detention center, Camp Green Lake, where the boys build character by spending all day, every day, digging holes exactly five feet wide and five feet deep. There is no lake at Camp Green Lake. But there are an awful lot of holes. It doesnt take long for Stanley to realize that Camp Green Lake isnt what it seems. Are the boys digging holes because the warden is looking for something? But what could be buried under a dried-up lake? Its up to Stanley to dig up the truth.',
			authors: [authors[2].id],
			readers: [users[1].id, users[0].id],
			genres: [genres[2].id]
		}),
		new models.Book({
			title: 'Frankenstein',
			cover: 'https://covers.openlibrary.org/w/id/8236225-M.jpg',
			about: 'Mary Shelleys timeless gothic novel presents the epic battle between man and monster at its greatest literary pitch. In trying to create life, the young student Victor Frankenstein unleashes forces beyond his control, setting into motion a long and tragic chain of events that brings Victor to the very brink of madness. How he tries to destroy his creation, as it destroys everything Victor loves, is a powerful story of love, friendship, scientific hubris, and horror.',
			authors: [authors[3].id],
			readers: [users[2].id],
			genres: [genres[3].id]
		}),
		new models.Book({
			title: 'The Fifth Wave',
			cover: 'https://covers.openlibrary.org/w/id/7436190-M.jpg',
			about: 'Silencers: After the 3rd wave, the remaining human population tries desperately to survive off whatever resources remain by looting, all the while clinging to the hope that "the people in charge", wherever they may be, are working toward a solution. Eventually, this belief seems legitimate when an impressive battalion of soldiers (with functioning vehicles) arrives at the makeshift camp where Cassie, Sam, and her father are staying. The soldiers and commander, however, only appear interested in the children and promptly load them onto waiting buses before ordering all the adults into the camp barracks. Once the humans are surrounded, Commander Vosch orders a massacre and kills everyone at the camp. Cassie, however, narrowly escapes and witnesses her fathers death by Voschs hand. At this moment, the 4th wave becomes clear: not all "humans" are actually humans.',
			authors: [authors[4].id],
			readers: [users[2].id],
			genres: [genres[4].id, genres[5].id]
		}),
		new models.Book({
			title: 'The Hunger Games',
			cover: 'https://covers.openlibrary.org/w/id/8368518-M.jpg',
			about: 'COULD YOU SURVIVE ON YOUR OWN, IN THE WILD, WITH EVERYONE OUT TO MAKE SURE YOU DONT LIVE TO SEE THE MORNING? In the ruins of a place once known as North America lies the nation of Panem, a shining Capitol surrounded by twelve outlying districts. The Capitol is harsh and cruel and keeps the districts in line by forcing them all to send one boy and one girl between the ages of twelve and eighteen to participate in the annual Hunger Games, a fight to the death on live TV. Sixteen-year-old Katniss Everdeen, who lives alone with her mother and younger sister, regards it as a death sentence when she steps forward to take her sisters place in the Games. But Katniss has been close to dead before--and survival, for her, is second nature. Without really meaning to, she becomes a contender. But if she is to win, she will have to start making choices that weight survival against humanity and life against love.',
			authors: [authors[5].id],
			readers: [users[2].id],
			genres: [genres[5].id, genres[6].id, genres[7].id]
		}),
	];

	for (const user of users) {
		await user.save();
	}

	for (const genre of genres) {
		await genre.save();
	}

	for (const author of authors) {
		await author.save();
	}

	for (const book of books) {
		await book.save();
	}
};

export default { createUsersWithBooks };
