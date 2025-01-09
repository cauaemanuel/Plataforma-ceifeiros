import "./CourseCard.css"

export const CourseCard = ({ item }) => {
    return (
        <>
      <div className="courseItem">
        <img src={item.url} alt={item.nome} />
        <h2>{item.nome}</h2>
      </div>
      </>
    );
  };
  