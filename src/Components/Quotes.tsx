import * as React from "react";
import { JsxElement } from "typescript";
import { API } from "../Utils/API";

const api_uri =
  "https://raw.githubusercontent.com/skolakoda/programming-quotes-api/master/backup/quotes.json";

export interface IQuotesProps {}

export interface IQuotesState {
  hasLoaded: boolean;
  API: API[];
  random_quote: string;
}

export default class Quotes extends React.Component<
  IQuotesProps,
  IQuotesState
> {
  constructor(props: IQuotesProps) {
    super(props);
    console.log("constructor");
    this.handleChange = this.handleChange.bind(this);
    this.genRandomQuote = this.genRandomQuote.bind(this);
    this.genQuote = this.genQuote.bind(this);

    this.state = {
      hasLoaded: false,
      API: {} as API[],
      random_quote: "",
    };
  }

  componentWillMount() {
    console.log("componentWillMount");
    this.getApi();
  }

  async getApi() {
    console.log("getApi");

    const response = (await (await fetch(api_uri)).json()) as API[];
    this.setState({ hasLoaded: true, API: response });
    //console.log(response);
  }

  getTodaysDate() {
    let now = new Date();
    let start = Number(new Date(now.getFullYear(), 0, 0));
    let diff = Number(now) - start;
    let oneDay = 1000 * 60 * 60 * 24;
    return Math.floor(diff / oneDay);
  }
  getRandomInt(min: number, max: number) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
  }

  genQuote() {
    let number = parseInt(this.state.random_quote);
    let numb = this.getRandomInt(0, 500);

    return number ? this.getQuote(number) : this.getQuote(numb);
  }
  handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    this.setState({ random_quote: event.target.value });
  }
  genRandomQuote() {
    const quote = this.genQuote();
    return (
      <div>
        <form action="">
          <h2>Quote Number</h2>
          <input
            type="text"
            value={this.state.random_quote}
            placeholder="default value = random"
            onChange={this.handleChange}
          />
        </form>
        {quote}
      </div>
    );
  }

  getQuote(index: number) {
    console.log("getQuote");

    if (this.state.hasLoaded === false) return;

    const quote = this.state.API[index % this.state.API.length];
    console.log(quote);

    return (
      <div className="quote">
        <fieldset>
          <legend>Quote</legend>

          <p className="message">
            "{quote.en}" <i>-{quote.author}</i>
          </p>
          <p className="author"></p>
          <p>
            Votes: {quote.numberOfVotes ? quote.numberOfVotes : 0} | Rating:{" "}
            {quote.rating ? quote.rating : "unrated"}
          </p>
          <hr />
        </fieldset>
      </div>
    );
  }

  public render() {
    console.log("render");
    let today = this.getTodaysDate();
    const todays_quote = this.getQuote(today);
    const randomQuote = this.genRandomQuote();
    return (
      <div>
        <h1>Quote of the day number: {today}</h1>
        {this.state.hasLoaded ? todays_quote : "hi"}
        <br />
        {this.state.hasLoaded ? randomQuote : "hi"}
      </div>
    );
  }
}
