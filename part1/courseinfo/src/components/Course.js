const Course = ({ course }) => {
return(
        <>
            <Header name={ course.name } />
            <Content parts={ course.parts } />
            <Total parts={ course.parts } />
        </>
    )
}

const Header = ({ name }) => {
    return <h2>{ name }</h2>;
};

const Content = ({ parts }) => {
    return(
        <>
            { parts.map(part => <Part key={ part.id } part={ part.name } exercises={ part.exercises } />) }
        </>
    );
};

const Total = ({ parts }) => {
    const total = parts.reduce((s, p) => s += p.exercises, 0)

    return(
        <h4>
            total of { total } exercises
        </h4>
    );
};

const Part = ({ part, exercises }) => {
    return(
        <p>
            { part } { exercises }
        </p>
    );
};

export default Course;