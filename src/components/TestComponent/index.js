import React from 'react'
import styles from './TestComponent.module.scss'

class TestComponent extends React.Component {
  render() {
    return <div className={styles.testComponent}>Hello from TestComponent</div>
  }
}

export default TestComponent
