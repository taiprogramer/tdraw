class Button:
    # Class button keep track of all buttons.
    def __init__(self, id, className, title, content):
        self._id = id
        self._className = className
        self._title = title
        self._content = content

    # Add getter for access.
    def getID(self):
        return self._id

    def getClassName(self):
        return self._className

    def getTitle(self):
        return self._title

    def getContent(self):
        return self._content


def createButton():
    btnErase = Button('erase', 'btn-danger', 'Erase Everything', 'Erase')
    btnUndo = Button('undo', 'btn-warning',
                     'Long Click to active Auto Undo', 'Undo')
    btnCommit = Button('commit', 'btn-success',
                       'Click to commit your change', 'Commit')
    btnSavePicture = Button('takepicture', 'btn-primary',
                            'Click to save your picture', 'Save Picture')
    buttons = [btnErase, btnUndo, btnCommit, btnSavePicture]
    return buttons
