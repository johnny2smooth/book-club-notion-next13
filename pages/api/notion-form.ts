import { NextApiRequest, NextApiResponse } from "next";
import { Client } from "@notionhq/client";

const notion = new Client({ auth: process.env.NOTION_TOKEN });
let databaseId = process.env.NOTION_DATABASE_ID || "";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    const { author, genre, rating, recommendation, book, yourname } = req.body;

    const response = await notion.pages.create({
      parent: {
        database_id: databaseId,
      },
      properties: {
        Name: {
          title: [
            {
              text: {
                content: book,
              },
            },
          ],
        },
        Title: {
          rich_text: [
            {
              text: {
                content: book,
              },
            },
          ],
        },
        Author: {
          rich_text: [
            {
              text: {
                content: author,
              },
            },
          ],
        },
        Genre: {
          rich_text: [
            {
              text: {
                content: genre,
              },
            },
          ],
        },
        Rating: {
          rich_text: [
            {
              text: {
                content: rating,
              },
            },
          ],
        },
        Recommendation: {
          rich_text: [
            {
              text: {
                content: recommendation,
              },
            },
          ],
        },
        Reviewer: {
          rich_text: [
            {
              text: {
                content: yourname,
              },
            },
          ],
        },
      },
    });
    console.log(response);
    res.status(200).json({ data: `${book}` });
  } else {
    res.status(405).json({ message: "Method not allowed" });
  }
}
