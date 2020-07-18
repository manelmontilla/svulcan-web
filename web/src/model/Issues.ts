interface Issue {
    target: string;
    summary: string;
    score: number;
    description: string;

}

interface Issues {
    [index: number]: Issues
}

export { Issues };
export { Issue };
