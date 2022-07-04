import './pages.scss';
/* eslint max-len: ["error", { "ignoreStrings": true }] */

const HomeScreen = () => {
  const line1 = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vitae quam vel neque pulvinar tincidunt. Nulla consectetur, ante ut viverra fringilla, est urna ultricies mauris, ac fringilla risus neque id lectus. Phasellus porta enim a nibh tincidunt, id sollicitudin libero egestas. Praesent vitae massa scelerisque turpis feugiat faucibus id a dui. Duis laoreet vehicula elit, eu eleifend lorem iaculis eu. Aenean non ante id velit lobortis faucibus. Donec pretium convallis nisl. Vestibulum viverra efficitur libero et suscipit. Donec non nulla id enim imperdiet interdum. Nullam viverra magna non mi venenatis tincidunt. Nam vitae lacinia nisl. Etiam quis neque justo. Morbi consectetur diam et cursus cursus. Cras rhoncus semper nisi, convallis molestie tortor. Nulla scelerisque lorem augue, et pharetra diam malesuada id.';
  const line2 = 'Proin vitae imperdiet risus. Etiam id lacinia risus. Suspendisse lobortis felis turpis, non   sodales lacus consequat eget. Nam quis sem a lectus tincidunt imperdiet quis a nulla. In eros libero, consectetur ac nibh feugiat, tristique ultrices nisl. Suspendisse blandit malesuada mauris sed fermentum. Morbi rutrum et nulla quis malesuada. Nulla lacinia arcu eu velit placerat, posuere tristique nibh ultrices. Phasellus consequat leo nisl, nec aliquam velit posuere vitae. Mauris sit amet consequat nunc, in lobortis est. Nam lobortis tincidunt elit sit amet molestie.';

  return (
    <div className="screen">
      <div className="container">
        <h2>Welcome to our page!</h2>
        <p>{line1}</p>
        <p>{line2}</p>
      </div>
    </div>
  );
};

export default HomeScreen;
