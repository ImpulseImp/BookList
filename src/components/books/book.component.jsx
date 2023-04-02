const Book = (props) => {
  const { img, title, author, children } = props;

  return (
    <article className='book'>
      {children}
      <img src={img} alt={title} />
      <h2>{title}</h2>

      <h4>{author} </h4>
    </article>
  );
};

export default Book;
