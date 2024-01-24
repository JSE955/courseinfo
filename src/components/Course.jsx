const Header = ({course}) => {
    return (
      <>
        <h2>{course.name}</h2>
      </>
    )
  }
  
  const Part = ({name, number}) => {
    return (
      <>
        <p>{name} {number}</p>
      </>
    )
  }
  
  const Content = ({parts}) => {
    return (
      <>
        {parts.map(part => <Part key={part.id} name={part.name} number={part.exercises} />)}
      </>
    )
  }
  
  const Total = ({parts}) => {
    const initial = 0
    const total = parts.reduce((s, c) => s + c.exercises, initial)
    return (
      <>
        <b>total of {total} exercises</b>
      </>
    )
  }
  
  const Course = ({course}) => {
    return (
      <>
        <Header course={course} />
        <Content parts={course.parts} />
        <Total parts={course.parts} />
      </>
    )
  }

export default Course