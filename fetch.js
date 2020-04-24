  componentDidMount() {
    fetch("https://corona.lmao.ninja/all")
      .then(res => res.json())
      .then(
        result => {
          this.setState({
            isLoaded: true,
            globalData: result
          });
        },
        error => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      );
  }




  componentDidMount() {
    Promise.all([
      fetch(https://corona.lmao.ninja/all),
      fetch(https://corona.lmao.ninja/countries)
    ])
      .then(([res1, res2]) => {
        return Promise.all([res1.json(), res2.json()]);
      })
      .then(
        ([res1, res2]) => {
          this.setState({
            isLoaded: true,
            globalData: res1,
            countrySelected: res2
          });
        },
        error => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      );
  }




  componentDidMount() {
    Promise.all([fetch('url'), fetch('url2')])

      .then(([res1, res2]) => { 
         return Promise.all([res1.json(), res2.json()]) 
      })
      .then(([res1, res2]) => {
        // set state in here
      });
}