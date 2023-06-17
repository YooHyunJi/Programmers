def solution(want, number, discount):
    answer = 0
    list_all_want = []

    dict_wishlist = {}

    for i in range(len(want)):
        dict_wishlist[want[i]] = number[i]

    for i in range(len(discount) - 9):
        dict_tmp = dict_wishlist.copy()
        for j in range(i, i + 10):
            if discount[j] in dict_tmp and dict_tmp[discount[j]] != 0:
                dict_tmp[discount[j]] -= 1
            else:
                break
        if sum(dict_tmp.values()) == 0:
            answer += 1

    print(answer)
    return answer


if __name__ == '__main__':
    want = ["banana", "apple", "rice", "pork", "pot"]
    number = [3, 2, 2, 2, 1]
    discount = ["chicken", "apple", "apple", "banana", "rice", "apple", "pork",
                "banana", "pork", "rice", "pot", "banana", "apple", "banana"]

    solution(want, number, discount)