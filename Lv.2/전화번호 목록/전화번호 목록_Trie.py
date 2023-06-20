class TrieNode:
    def __init__(self):
        self.children = {}
        self.end = False

class Trie:
    def __init__(self):
        self.root = TrieNode()

    def insert(self, word: str) -> None:
        node_now = self.root

        for c in word:
            if c not in node_now.children:
                node_now.children[c] = TrieNode()
            node_now = node_now.children[c]
        node_now.end = True

    def startswith(self, prefix: str) -> bool:
        node_now = self.root

        for c in prefix:
            if c not in node_now.children:
                return False
            node_now = node_now.children[c]
            if node_now.end:
                return True
        return True


def solution(phone_book):
    answer = True
    trie = Trie()

    for phone_number in phone_book:
        if trie.startswith(phone_number):
            return False
        trie.insert(phone_number)

    return answer


if __name__ == '__main__':
    phone_book = ["119", "97", "11954", "324", "114"]

    solution(phone_book)
