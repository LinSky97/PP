// បង្កើត Array មួយសម្រាប់រក្សាទុកទំនិញដែលបានរើស
let cart = [];
let totalAmount = 0;

// ១. មុខងារបន្ថែមទំនិញចូលកន្ត្រក
function addToCart(pName, pPrice) {
    // បន្ថែមទិន្នន័យទៅក្នុង Array
    cart.push({ name: pName, price: pPrice });
    
    // បច្ចុប្បន្នភាពចំនួនទំនិញលើ Header
    document.getElementById('cart-count').innerText = cart.length;
    
    // ហៅ Function ឱ្យបង្ហាញទំនិញលើតារាងគិតលុយ
    updateCartUI();
}

// ២. មុខងារបង្ហាញទិន្នន័យលើតារាង និងគិតលុយសរុប
function updateCartUI() {
    const cartItemsElement = document.getElementById('cart-items');
    const totalPriceElement = document.getElementById('total-price');
    
    // សម្អាតតារាងចាស់ចេញសិន
    cartItemsElement.innerHTML = '';
    totalAmount = 0;
    
    if (cart.length === 0) {
        cartItemsElement.innerHTML = `<tr id="empty-message"><td colspan="3">មិនទាន់មានទំនិញក្នុងកន្ត្រកនៅឡើយទេ</td></tr>`;
        totalPriceElement.innerText = "$0.00";
        return;
    }
    
    // រាប់បញ្ចូលទំនិញ និងបូកសរុបលុយ
    cart.forEach((item, index) => {
        totalAmount += item.price;
        
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${item.name}</td>
            <td>$${item.price.toFixed(2)}</td>
            <td><button class="btn-delete" onclick="removeItem(${index})">លុប</button></td>
        `;
        cartItemsElement.appendChild(row);
    });
    
    // បង្ហាញតម្លៃសរុបថ្មី
    totalPriceElement.innerText = "$" + totalAmount.toFixed(2);
}

// ៣. មុខងារលុបទំនិញចេញពីកន្ត្រកវិញ
function removeItem(index) {
    cart.splice(index, 1); // លុបចេញពី Array តាមរយៈលេខរៀង Index
    document.getElementById('cart-count').innerText = cart.length;
    updateCartUI(); // ធ្វើបច្ចុប្បន្នភាពតារាងឡើងវិញ
}

// ៤. មុខងារចុចគិតលុយកម្មង់ (Checkout Order)
function checkoutOrder() {
    if (cart.length === 0) {
        alert("សូមជ្រើសរើសកុំព្យូទ័រយ៉ាងហោចណាស់ ១ គ្រឿងមុនពេលគិតលុយ!");
        return;
    }
    
    // បង្ហាញលទ្ធផលជោគជ័យ
    alert(`🎉 ការកម្មង់បានជោគជ័យ!\n💵 ចំនួនសរុបត្រូវទូទាត់៖ $${totalAmount.toFixed(2)}\n🙏 សូមអរគុណសម្រាប់ការគាំទ្រហាងរបស់យើង!`);
    
    // សម្អាតកន្ត្រកទំនិញមកវិញក្រោយទិញរួច
    cart = [];
    document.getElementById('cart-count').innerText = 0;
    updateCartUI();
}

// មុខងារជំនួយ៖ ចុចលើកន្ត្រកខាងលើ រត់មកផ្នែកគិតលុយខាងក្រោម
function scrollToCart() {
    document.getElementById('cart-section').scrollIntoView({ behavior: 'smooth' });
}