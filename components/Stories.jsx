import { faker } from "@faker-js/faker";
import { useEffect, useState } from "react";
import Story from "./Story";

import { useSession } from "next-auth/react";
const Stories = () => {
  const [suggestions, setSuggestions] = useState([]);
  const { data: session } = useSession();
  useEffect(() => {
    const suggestions = [...Array(20)].map((_, i) => {
      return {
        id: i,
        name: faker.name.findName().split(" ").join("").toLocaleLowerCase(),
        avatar: faker.image.avatar(),
      };
    });
    setSuggestions(suggestions);
  }, []);

  return (
    <div className='flex space-x-2 p-6 mt-8 bg-white border-gray-200 border rounded-sm overflow-x-scroll scrollbar-thin scrollbar-thumb-black'>
      {session && (
        <Story avatar={session?.user?.image} name={session?.user?.username} />
      )}
      {suggestions.map((suggestion) => (
        <Story
          key={suggestion.id}
          avatar={suggestion.avatar}
          name={suggestion.name}
        />
      ))}
    </div>
  );
};

export default Stories;
