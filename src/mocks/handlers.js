import { http, HttpResponse } from "msw";

const total = 500;
const pageSize = 20;

const allData = Array.from({ length: total }, (_, i) => i + 1);
console.log("allData", allData);

export const handlers = [
  http.get("/api/products", ({ request }) => {
    console.log("request", request.url);
    const url = new URL(request.url);
    const page = Number(url.searchParams.get("page") || 1);
    const start = (page - 1) * pageSize;
    const end = start + pageSize;
    console.log("url", url);
    return HttpResponse.json({
      data: allData.slice(start, end),
      hasMore: end < total,
      nextPage: page + 1,
    });
  }),
  http.post("/api/products/add", async ({ request }) => {
    const body = await request.json();
    return HttpResponse.json(
      {
        id: "prod_004",
        name: body.name,
        price: body.price,
      },
      { status: 201 },
    );
  }),
];
