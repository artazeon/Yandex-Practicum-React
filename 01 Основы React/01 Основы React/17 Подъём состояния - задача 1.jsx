import React from 'react';
import styles from './styles.module.css';
import { SwitchControl } from './components/SwitchControl';
import { FlowControl, FLOW_OPTIONS } from './components/FlowControl';
import { MainDashboard, MIN_TEMPERATURE, MAX_TEMPERATURE } from './components/MainDashboard';

export default class App extends React.Component {
  state = {
    enabled: false,
    temperature: 21,
    flow: 1
  };

  /* Здесь ваш код */
  handlePowerSwitch = () => {
    this.setState({...this.state, enabled: !this.state.enabled});
  };

  handleFlowSelect = (value) => {
    this.setState({...this.state, flow: value});
  };
  

  handleTemperatureIncrease = () => {
    if (this.state.temperature >= MAX_TEMPERATURE) return;
    this.setState({...this.state, temperature: this.state.temperature + 1});
  };
  
  handleTemperatureDecrease = () => {
    
    if (this.state.temperature <= MIN_TEMPERATURE) return;
    this.setState({...this.state, temperature: this.state.temperature - 1});
  };
  

  

render() {
  const { enabled } = this.state;

  return (
    <div className={styles.root}>
      <div className={styles.wrap}>
        <h1 className={styles.title}>Гостиная</h1>
        <div className={styles.card}>
          <div className={styles.column}>
            <SwitchControl enabled={enabled} onClick={this.handlePowerSwitch} />
            <div>
              <span className={styles.iconFan} />
              <label>
                Скорость обдува
                <div className={styles.fanRow}>
                  {FLOW_OPTIONS.map(elem => (
                    <FlowControl
                      key={`flow_elem${elem}`}
                      flow={elem}
                      selectedFlow={this.state.flow}
                      handleFlowSelect={this.handleFlowSelect}
                      />
                  ))}
                </div>
              </label>
            </div>
          </div>
          <MainDashboard
            temperature={this.state.temperature}
            onIncreaseClick={this.handleTemperatureIncrease}
            onDecreaseClick={this.handleTemperatureDecrease}
            />
          <div className={styles.column}>
            <span className={styles.iconDrop} />
            <label className={styles.dropLabel}>
              Влажность
              <p>52%</p>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}
}