import { BaseForm } from 'uniforms';

function Unstyled(parent: any): any {
  class _ extends parent {
    static Unstyled = Unstyled;

    static displayName = `Unstyled${parent.displayName}`;
  }

  return _;
}

export default Unstyled(BaseForm);
