<script>
  let facebook = "/icons/facebook.png";
  let linkedin = "/icons/linkedin.png";
  let github = "/icons/github.png";
  let spotify = "/icons/spotify.png";
  let world = "/icons/world.png";
</script>

<style>
  footer {
    background-color: #d3ddd4;
    border-top: 1px solid #91b496;
    font-weight: 300;
    padding: 0 1em;
    text-align: center;
  }

  img {
    margin-left: 10px;
    text-align: right;
    width: 25px;
    height: 25px;
  }

  span {
    margin-top: 10px;
    font-weight: 500;
    text-align: right;
  }
</style>

<footer>
  <div>
    © 2020 -
    <strong>Site made by Wendy van Epen</strong>
    <p>
      <a href="https://www.google.com">
        <img src={world} alt="joe" />
      </a>
      <a href="https://www.facebook.com/wendy.vanepen">
        <img src={facebook} alt="joe" />
      </a>
      <a href="https://www.linkedin.com/in/wendy-van-epen-00bb9032/">
        <img src={linkedin} alt="joe" />
      </a>
      <a href="https://open.spotify.com/user/1183104737">
        <img src={spotify} alt="joe" />
      </a>
      <a href="https://github.com/wendyvanepen/worldwidewendy">
        <img src={github} alt="joe" />
      </a>
    </p>
  </div>
</footer>
