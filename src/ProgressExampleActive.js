import React from 'react'
import { Progress } from 'semantic-ui-react'

const ProgressExampleActive = (props) => (
  <Progress percent={props.percent} active>
    Active
  </Progress>
)

export default ProgressExampleActive
