var Dashboard = React.createClass({
  render: function () {
    return (
      <div className='flex-container'>
        <Ideas />
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
        <IdeaIndex />
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
    return (
      <article></article>
    );
  }
});

var IdeaCreation = React.createClass({
  render: function () {
    return (
      <aside id='idea-creation-area'>
        <h2>Add an Idea:</h2>
        <form action='/' accept-charset='UTF-8' data-remote='true' method='post'>
          <input name='utf8' type='hidden' value='&#x2713;' />
          <label for='idea_title'>Title</label>
          <input type='text' name='idea[title]' id='idea_title' />
          <label for='idea_body'>Body</label>
          <textarea name='idea[body]' id='idea_body'></textarea>
          <input type='submit' name='commit' value='Save' id='save-idea' />
        </form>
      </aside>
    );
  }
});