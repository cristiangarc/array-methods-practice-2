const {
  findGameByName,
  gamesOnPlayStation,
  getAllGameNames,
  totalNumberOfPlayers,
  gamesReleasedAfter2019,
  updateGameDescription,
  gamesWithConsoleCount,
  gameWithMaxPlayers,
  gamesOnPCAndXbox,
  countGamesByYear,
} = require("../");

describe("findGameByName", () => {
  test("finds a game by name", () => {
    expect(findGameByName("Space Adventure")).toEqual({
      id: 1,
      name: "Space Adventure",
      description: "Explore distant galaxies",
      consoles: ["PlayStation", "Xbox"],
      releaseYear: 2020,
      numPlayers: 1,
    });
  });
});

describe("gamesOnPlayStation", () => {
  test("gets all games available on PlayStation", () => {
    expect(gamesOnPlayStation()).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          consoles: expect.arrayContaining(["PlayStation"]),
        }),
      ])
    );
  });
});

describe("getAllGameNames", () => {
  test("gets names of all games", () => {
    expect(getAllGameNames()).toEqual(
      expect.arrayContaining([
        "Space Adventure",
        "Mystery Island",
        "Racers Unleashed",
        "Alien Invasion",
        "Zombie World",
      ])
    );
  });
});

describe("totalNumberOfPlayers", () => {
  test("finds the total number of players across all games", () => {
    expect(totalNumberOfPlayers()).toBe(13);
  });
});

describe("gamesReleasedAfter2019", () => {
  test("gets all games released after 2019", () => {
    expect(gamesReleasedAfter2019()).toEqual(
      expect.arrayContaining([
        expect.objectContaining({ releaseYear: expect.any(Number) }),
      ])
    );
  });
});

describe("updateGamedescription", () => {
  test("changes description of a specific game", () => {
    updateGameDescription("Space Adventure", "New Description");
    expect(findGameByName("Space Adventure").description).toBe(
      "New Description"
    );
  });
});

describe("gamesWithConsoleCount", () => {
  test("gets a list of games with the number of consoles they are available on", () => {
    expect(gamesWithConsoleCount()).toEqual(
      expect.arrayContaining([
        expect.objectContaining({ consoleCount: expect.any(Number) }),
      ])
    );
  });
});

describe("gameWithMaxPlayers", () => {
  test("finds the game with the maximum number of players", () => {
    expect(gameWithMaxPlayers()).toEqual(
      expect.objectContaining({
        numPlayers: 5,
      })
    );
  });
});

describe("gamesOnPCAndXbox", () => {
  test("gets an array of games available on both PC and Xbox", () => {
    expect(gamesOnPCAndXbox()).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          consoles: expect.arrayContaining(["PC", "Xbox"]),
        }),
      ])
    );
  });
});

describe("countGamesByYear", () => {
  test("counts how many games were released each year", () => {
    const counts = countGamesByYear();
    Object.keys(counts).forEach((year) => {
      expect(counts[year]).toBeGreaterThanOrEqual(1);
    });
  });
});
