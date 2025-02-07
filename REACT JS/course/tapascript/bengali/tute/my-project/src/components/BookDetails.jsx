function BookDetails({title, author}) {
  return (
    <>
      <h2 className="text-xl font-semibold">Title: {title}</h2>
      <p className="text-gray-600">Author: {author}</p>
    </>
  );
}

export default BookDetails;
