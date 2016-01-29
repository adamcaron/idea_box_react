var Dashboard = React.createClass({
  getInitialState: function () {
    return { ideas: [] }
  },
  componentDidMount: function () {
    $.ajax({
      url: '/api/v1/ideas.json',
      type: 'GET',
      success: (response) => {
        this.setState({ideas: response});
      },
      error: function () {
        console.log('Sorry, could not fetch the ideas.')
      }
    });
  },
  createIdea: function (idea) {
    $.ajax({
      url: '/api/v1/ideas.json',
      type: 'POST',
      data: { idea: { title: idea.title, body: idea.body } },
      success: (newIdea) => {
        this.state.ideas.unshift(newIdea)
        this.setState({ ideas: this.state.ideas });
      },
      error: function(response) {
        console.log(response);
        alert('Sorry, the idea could not be created!');
      }
    })
  },
  render: function () {
    return (
      <div className='flex-container'>
        <Ideas ideas={this.state.ideas} />
        <NewIdea createIdea={this.createIdea} />
      </div>
    );
  }
});

var Ideas = React.createClass({
  render: function () {
    return (
      <section id='ideas'>
        <Search />
        <IdeaIndex ideas={this.props.ideas} />
      </section>
    );
  }
});

var Search = React.createClass({
  render: function () {
    return (
      <section id='search-area'>
        <input type='text' id='search-input' placeholder='Search Ideas' />
      </section>
    );
  }
});

var IdeaIndex = React.createClass({
  render: function () {
    var ideas = this.props.ideas.map(function(idea, index) {
      var dateOptions = { weekday: 'long', year: 'numeric', month: 'short', day: 'numeric', hour: 'numeric', minute: 'numeric' };
      var date = new Date(idea.created_at).toLocaleString('en-US', dateOptions);
      var truncatedBody = truncate(idea.body, 100);

      return (
        <article className='idea' key={ idea.id }>
          <h2 className='title'>{ idea.title }</h2>
          <span className='date'>{ date }</span>
          <p className='body'>{ truncatedBody }</p>
          <a className='edit-idea' href='/ideas/edit'>Edit</a>
          <button name='button' type='submit' className='delete-idea'>Delete</button>
          <span className='quality'>{ idea.quality }</span>
          <button name='button' type='submit' className='quality-up'>+</button>
          <button name='button' type='submit' className='quality-down'>-</button>
        </article>
      );
    });

    return (
      <div>
        { ideas }
      </div>
    );

    function truncate(text, maxLength) {
      if (text.length > maxLength) {
        text = text.substr(0,maxLength-3).replace(/\w+$/, '') + "...";
      } // truncate and ensure it doesn't cut a word in the middle
      return text;
    }
  }
});

var NewIdea = React.createClass({
  createIdea: function (event) {
    event.preventDefault();

    var title = React.findDOMNode(this.refs.title).value.trim();
    var body = React.findDOMNode(this.refs.body).value.trim();

    var idea = {
      title: title,
      body: body
    }

    this.props.createIdea(idea);
    React.findDOMNode(this.refs.newIdeaForm).reset();
  },
  render: function () {
    return (
      <aside id='idea-creation-area'>
        <h2>Add an Idea:</h2>
        <form ref='newIdeaForm' onSubmit={this.createIdea}>
          <label htmlFor='idea_title'>Title</label>
          <input type='text' ref='title' name='idea[title]' id='idea_title' placeholder='Title'/>
          <label htmlFor='idea_body'>Body</label>
          <textarea type='text' ref='body' name='idea[body]' id='idea_body' placeholder='Description'></textarea>
          <button type='submit' id='save-idea'>Create Idea</button>
        </form>
      </aside>
    );
  }
});