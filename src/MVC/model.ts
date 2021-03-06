export type filesCatalog = {
	film: items[];
	books: items[];
	podcast: items[];
	music: items[];
};

export type items = {
	id: string;
	title: string;
	description?: string;
	arrTags: string[];
};
export class Model {
	catalogData: filesCatalog = {
		film: [
			{
				id: "film1",
				title: "Фантастика",
				arrTags: ["#Фильмы", "#Фантастика"],
			},
			{
				id: "film2",
				title: "Комедия",
				arrTags: ["#Фильмы", "#Комедия"],
			},
			{
				id: "film3",
				title: "Триллер",
				arrTags: ["#Фильмы", "#Триллер"],
			},
			{
				id: "item4",
				title: "Боевик",
				arrTags: ["#Фильмы", "#Боевик"],
			},
		],
		books: [
			{
				id: "book1",
				title: "1984",
				arrTags: ["#Книги", "#Фантастика"],
			},
			{
				id: "book2",
				title: "Мертвые души",
				arrTags: ["#Книги", "#Комедия"],
			},
			{
				id: "book3",
				title: "Хоббит",
				arrTags: ["#Книги", "#Триллер"],
			},
			{
				id: "book4",
				title: "Гарри Поттер",
				arrTags: ["#Книги", "#Боевик"],
			},
		],
		podcast: [
			{
				id: "podcast1",
				title: "Музыкальный",
				arrTags: ["#Подкаст", "#Фантастика"],
			},
			{
				id: "podcast2",
				title: "Бизнес",
				arrTags: ["#Подкаст", "#Комедия"],
			},
			{
				id: "podcast3",
				title: "Психологические",
				arrTags: ["#Подкаст", "#Триллер"],
			},
			{
				id: "podcast4",
				title: "Семейные",
				arrTags: ["#Подкаст", "#Боевик"],
			},
		],
		music: [
			{
				id: "music1",
				title: "Реп",
				arrTags: ["#Музыка", "#Реп"],
			},
			{
				id: "music2",
				title: "Рок",
				arrTags: ["#Музыка", "#Рок"],
			},
			{
				id: "music3",
				title: "Техно",
				arrTags: ["#Музыка", "#Техно"],
			},
			{
				id: "music4",
				title: "Классика",
				arrTags: ["#Музыка", "#Классика"],
			},
		],
	};
	constructor() {
	}
	getData(): filesCatalog {
		return this.catalogData;
	}

}