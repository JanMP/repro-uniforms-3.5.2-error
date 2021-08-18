import React, {useState, useEffect} from 'react';
import {AutoForm} from 'meteor/janmp:sdui-forms'
import SimpleSchema from 'simpl-schema';
import SimpleSchema2Bridge from 'uniforms-bridge-simple-schema-2';



const schema = new SimpleSchema({
  someString: String

});

const schemaBridge = new SimpleSchema2Bridge(schema);

const freshModel = {
  someString: 'Fnord!'
}

export const App = () => {

  const [model, setModel] = useState(freshModel)
  
  useEffect(() => console.log(model), [model])
  
  return (
    <div>
      <AutoForm
        schema={schemaBridge}
        model={model}
        onSubmit={setModel}
      />
    </div>
  )
}

