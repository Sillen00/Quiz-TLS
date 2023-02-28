import { useEffect, useState } from "react";

//  https://opentdb.com/api_category.php - Returnerar alla kategorier och IDs
//  https://opentdb.com/api_count.php?category=CATEGORY_ID_HERE - Returnerar antal frågor i en kategori

interface Quiz {
  category: string;
  type: string;
  difficulty: string;
  question: string;
  correct_answer: string;
  incorrect_answers: string[];
}

interface Category {
  id: number;
  name: string;
}

export function useQuiz(category?: string) {
  const [quiz, setQuiz] = useState<Quiz[]>([]);

  useEffect(() => {
    fetch ("https://opentdb.com/api_category.php")
      .then((response) => response.json())
      .then(({trivia_categories}) => {
        //  tolowercas.include fixar att kategorin "General Knowledge" matchar med "general-knowledge"
      //   const {id} = trivia_categories.find((c: Category) => c.name == category);
      //   return fetch(`https://opentdb.com/api.php?amount=10&category=${id}&type=multiple`)
      // })
      const formattedCategory = category?.toLowerCase().split(' ').join('-');
      const { id } = trivia_categories.find((c: Category) => c.name.toLowerCase().split(' ').join('-') === formattedCategory);
      return fetch(`https://opentdb.com/api.php?amount=10&category=${id}&type=multiple`)
    })
      .then((response) => response.json())
      .then(({ results }) => setQuiz(results));
  }, [category]);

  return quiz;
}
