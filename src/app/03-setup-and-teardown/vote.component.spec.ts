import { VoteComponent } from './vote.component';

describe('VoteComponent', () => {
  let vote: VoteComponent;

  beforeEach(() => {
    vote = new VoteComponent();
  });

  it('Should increment totalVotes when upvoted', () => {
    const result = vote.upVote();
    expect(vote.totalVotes).toBe(1);
  });

  it('Should decrement totalVotes when downVoted', () => {
    const result = vote.downVote();
    expect(vote.totalVotes).toBe(-1);
  });
});
