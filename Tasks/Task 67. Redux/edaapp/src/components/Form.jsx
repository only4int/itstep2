const React = require("react");

const Form = (props) => {

    return <>
                    <form class="blog_form" action="">
                        <div class="mb-3">
                            <label for="name" class="form-label">Название</label>
                            <input type="text" class="form-control" id="name" />
                        </div>
                        <div class="mb-3">
                            <label for="price" class="form-label">Цена</label>
                            <input type="text" class="form-control" id="price" />
                        </div>
                        <div class="mb-3">
                            <label for="quantity" class="form-label">Количество</label>
                            <input type="text" class="form-control" id="quantity" />
                        </div>
                        <div class="mb-3">
                            <button type="submit" class="btn btn-primary">Добавить</button>
                        </div>
                    </form>
    </>
}

module.exports = Form;