

export class NewsRatingModel {
    title: string;
    link: string;
    votes: number;

    constructor(passedTitle: string, link: string, votes?: number) {
        this.title = passedTitle;
        this.link = link;
        this.votes = votes || 0;
    }

    voteUp() {
        this.votes++;
    }

    voteDown() {
        this.votes--;
    }
}

