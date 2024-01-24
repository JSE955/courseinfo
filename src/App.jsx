const Header = ({course}) => {
  return (
    <>
      <h1>{course.name}</h1>
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

const App = () => {
  const course = {
    id: 1,
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10,
        id: 1
      },
      {
        name: 'Using props to pass data',
        exercises: 7,
        id: 2
      },
      {
        name: 'State of a component',
        exercises: 14,
        id: 3
      }
    ]
  }

  return (
    <div>
      <Course key={course.id} course={course} />
    </div>
  )
}

export default App