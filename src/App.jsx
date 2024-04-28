import Table from "./components/classwork/Table";
import Users from "./components/useeffect/Users";
import UsestateExampleOne from "./components/usestate/UsestateExampleOne";
import UsestateWithArray from "./components/usestate/UsestateWithArray";
import UsestateWithObject from "./components/usestate/UsestateWithObject";
import ConditionOne from "./components/conditionalrendering/ConditionOne";

const App = () => {
  return (
    <div className="container">
      <h2>Hello react Hook</h2>
      <UsestateExampleOne />
      <UsestateWithObject />
      <UsestateWithArray/>
      <Table/>
      <Users/>
      <ConditionOne/>
    </div>
  );
};

export default App;
