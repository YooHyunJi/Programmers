def solution(phone_book):
    answer = True

    phone_book.sort()
    for num_1, num_2 in zip(phone_book[:-1], phone_book[1:]):
        if num_2.startswith(num_1):
            return False

    return answer


if __name__ == '__main__':
    phone_book = ["119", "97", "11954", "324", "114"]

    solution(phone_book)
