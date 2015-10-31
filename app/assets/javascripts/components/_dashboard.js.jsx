var Dashboard = React.createClass({
  getInitialState: function () {
    return { ideas: [] }
  },
  componentDidMount: function () {
    $.ajax({
      url: '/api/v1/ideas.json',
      type: 'GET',
      success: function (response) {
        this.setState({ideas: response});
      }.bind(this),
      error: function () {
        console.log('Sorry, didn\'t work!')
      }
    });
  },
  render: function () {
    return (
      <div className='flex-container'>
        <Ideas ideas={this.state.ideas} />
        <IdeaCreation />
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
      return (
        <article className='idea' key={ idea.id }>
          <h2 className='title'>{ idea.title }</h2>
          <span className='date'>{ idea.date }</span>
          <p className='body'>{ idea.body }</p>
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
  }
});

var IdeaCreation = React.createClass({
  render: function () {
    return (
      <aside id='idea-creation-area'>
        <h2>Add an Idea:</h2>
        <form action='/' acceptCharset='UTF-8' data-remote='true' method='post'>
          <input name='utf8' type='hidden' value='&#x2713;' />
          <label htmlFor='idea_title'>Title</label>
          <input type='text' name='idea[title]' id='idea_title' />
          <label htmlFor='idea_body'>Body</label>
          <textarea name='idea[body]' id='idea_body'></textarea>
          <input type='submit' name='commit' value='Save' id='save-idea' />
        </form>
      </aside>
    );
  }
});