import React from 'react';
import formStyles from './form.module.css';

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isSubmit: false,
      value: ''
    };

    this.emailInput = React.createRef();
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
  }

  componentDidMount() {
    this.emailInput.current.focus();
  }

handleFormSubmit(e) {
    e.preventDefault();
    this.setState({
      ...this.state,
      isSubmit: true,
      value: this.emailInput.current.value
    });
  } 

  render() {
    return (
      <div className={formStyles.root}>
        <form
          className={formStyles.form}
          onSubmit={this.handleFormSubmit}
        >
          <input
            ref={this.emailInput}
            className={formStyles.input}
            type='email'
            placeholder={'Введите свой e-mail'}
          />
          <button
            className={formStyles.button}
            type={'submit'}
          >
            Подписаться
          </button>
        </form>
<p className={formStyles.message}>
  {
    this.state.isSubmit && this.state.value &&
    <>
      <span>На почту {this.state.value} успешно подписана рассылка</span>
      <span>Но это не точно</span>
    </>
  }
</p> 
      </div>
    );
  }
}

export default Form;