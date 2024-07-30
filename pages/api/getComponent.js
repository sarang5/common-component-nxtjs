import Button from "../../components/Button";
import Input from "../../components/Input";

export default async function handler(req, res) {
  const { componentName } = req.query;

  const components = {
    button: Button,
    input: Input,
  };

  const Component = components[componentName];

  if (!Component) {
    return res.status(404).json({ error: 'Component not found' });
  }

  res.status(200).json({ component: Component });
}
