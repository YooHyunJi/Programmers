import itertools


def solution(k, dungeons):
    answer = 0
    len_dungeons = len(dungeons)

    # 1
    sequences = list(itertools.permutations([i for i in range(0, len_dungeons)]))

    # 2
    for i in range(len(sequences)):
        hp = k
        possible_dungeons = 0

        # 3
        for j in range(len_dungeons):
            this_dungeon = dungeons[sequences[i][j]]

            # 4
            if hp >= this_dungeon[0]:
                possible_dungeons += 1
                hp -= this_dungeon[1]
            else:
                break

        # 5
        if possible_dungeons > answer:
            answer = possible_dungeons
            # 6
            if answer == len_dungeons:
                break

    print(answer)
    return answer


if __name__ == '__main__':
    k = 80
    dungeons = [[80, 20], [50, 40], [30, 10]]

    solution(k, dungeons)
