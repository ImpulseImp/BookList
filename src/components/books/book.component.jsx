const Book = (props) => {
  const { img, title, author, children, id, findTheBook, number } = props;

  return (
    <article className='book'>
      {children}
      <img src={img} alt={title} />
      <h2>{title}</h2>
      <div>
        <button
          type='button'
          onClick={() => {
            console.log(title);
            findTheBook(id);
          }}
        >
          info
        </button>
      </div>
      <h4>{author} </h4>
      <span className='number'>{`# ${number}`}</span>
    </article>
  );
};

export default Book;
